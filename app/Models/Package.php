<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class package extends Model
{
    use HasFactory;

    protected $fillable = [
        'FirstParameter',
        'SecondParameter',
        'ThirdParameter',
        'FourthParameter',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
