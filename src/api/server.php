<?php

if($_SERVER['REQUEST_METHOD'] === 'GET') {

    if($_GET['cur'] === 'now') {
        $data = file_get_content('https://social-network.samuraijs.com/api/1.0/users')
    }
}