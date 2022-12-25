<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if(!User::where('email', 'laravel@dev.admin')->exists()){
            User::factory()->create([
                'name' => 'admin',
                'email' => 'laravel@dev.admin',
                'password' => bcrypt('admin1234'),
                'email_verified_at' => now(),
            ]);
            
            $this->command->info('Admin user created');
        } 
    }
}
