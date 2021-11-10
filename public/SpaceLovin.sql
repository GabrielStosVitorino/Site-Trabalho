create database SpaceLovin;
use SpaceLovin;

create table Cadastro(
idCadastro int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
confirmacaosenha varchar(45));

