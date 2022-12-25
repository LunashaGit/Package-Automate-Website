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
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
