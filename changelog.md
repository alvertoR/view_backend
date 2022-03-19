# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Keep me updated 🤦.

## 2022-03-18

### Added

- url links for vue and angular projects

### Changed

- subject in sendToken method in services layer at auth module

## 2022-03-04

### Added 

- enviroment variables for firebase
- middleware for authentication and multer
- endpoints for create, get and update post in post module
- services for upload file in firebase storage
- column url image in user model
- method for update profile picture in user module

## 2022-02-28

### Added

- endpoints for follow and unfollow user
- flow to send mail for recovery password and flow for update password
- flow to create user with profile and auth values.

### Removed

- following model and following module
- migratios for alter table auth

## 2022-02-26

### Added

- models for followers and endpoint por create a user
- endpoints for update and get profile
- endpoint for login an user
- login user and create utils for hash password and jwt flow

## 2022-02-13

### Added

- base structure of the project
- models for auth, profile, user and post created
- migrations for create tables auth, profile, user and post created
- base architecture of the project