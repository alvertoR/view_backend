const { models } = require('../../services/sequelize/sequelize.service');
const { sendMail } = require('../../services/nodemailer/nodemailer.service');
const { sign, verify } = require('../../utils/jtw.helper');
const { config } = require('../../config/config');
const { hashPassword } = require('../../utils/password.helper');
const UserService = require('../user/serivices');

const userService = new UserService();

class AuthService{
    constructor () {}

    async login(email, password) {
        const validateUser = await userService.login(email, password);
        return validateUser;
    }

    async findOneByUserId(id) {
        const auth = await models.Auth.findOne({
            where: {
                userId: id
            }
        });

        return auth;
    }

    async update(id, data) {
        const auth =  await models.Auth.findOne({
            where: {
                id
            }
        });
        const response = await auth.update(data);

        return response;
    }

    async sendToken(email) {
        const user = await userService.findUseByEmail(email);
        const auth = await this.findOneByUserId(user.dataValues.id);
        
        const payload = {
            id: auth.dataValues.id
        }
        const token = sign(payload, config.jwtPassword, { expiresIn: '15min' });
        const link = `http://myfrontend.com/recovery?token=${token}`;

        await this.update(auth.dataValues.id, {
            token
        });

        const mail = {
            from: 'zetoma97@gmail.com', 
            to: `${user.email}`,
            subject: "Posible solución a lo de sendgrid", 
            html: `<b>ingresa a este link para recuperar tu contraseña</b> ${link}`, 
        }

        const response = await sendMail(mail);

        return response;
    }

    async changePassword(token, newPassword) {
        try {
            const payload = verify(token, config.jwtPassword);
            console.log(payload);

            const auth = await models.Auth.findByPk(payload.id);
            console.log(auth);
            
            if(auth.dataValues.token !== token){
                throw new Error('unauthorized');
            }

            const hash = await hashPassword(newPassword);

            await userService.updateUser(auth.dataValues.userId, {
                password: hash
            });

            await this.update(payload.id, {
                token: ''
            });

            return {
                message: 'Password changed'
            }
        }catch(error) {
            throw new Error('unauthorized');
        }
    }
}

module.exports = AuthService;