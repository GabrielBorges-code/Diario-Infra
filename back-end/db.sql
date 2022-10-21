CREATE DATABASE infrastructure_diary;

USE infrastructure_diary;

CREATE TABLE shift (
    id int primary key auto_increment,
    shift varchar(50),
    date_and_time_ticket varchar(50),
    num_ticket varchar(10),
    requisition_type varchar(50),
    responsible_NOC varchar(50),
    priority varchar(50),
    intermittent varchar(10),
    responsible_island varchar(50),
    responsible_triggered varchar(50),
    activation_time varchar(50),
    out_of_office varchar(10),
    status varchar(50),
    warning_email varchar(50),
    type_of_activation varchar(50),
    note text
);
