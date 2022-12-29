<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'namePackage',
        'description',
        'type',
        'nameAuthor',
        'emailAuthor',
        'stability',
        'file',
        'command',
        'user_id'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

}
