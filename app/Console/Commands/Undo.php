<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Undo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'undo';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Undo the last creation file';

    /**
     * Execute the console command.
     * 
     */
    public function handle()
    {
        $history = file_get_contents(storage_path('logs/artisan.log'));
        $commands = explode("\n", preg_replace('/^.*\[.*\] local.DEBUG: artisan make:/m', '', $history));
        $lastCommand = rtrim($commands[count($commands) - 2], "  ");
        $words = explode(' ', $lastCommand);
        foreach (array_slice($words, 0, -1) as $word) {
            switch($word){
                case ($word == 'model' || $word == '-m'):
                    unlink(app_path('Models/' . $words[count($words) - 1] . '.php'));
                    break;
                case ($word == 'controller' || $word == '-c'):
                    unlink(app_path('Http/Controllers/' . $words[count($words) - 1] . 'Controller.php'));
                    break;
                case ($word == 'factory' || $word == '-f'):
                    unlink(database_path('factories/' . $words[count($words) - 1] . 'Factory.php'));
                    break;
                case ($word == 'seeder' || $word == '-s'):
                    unlink(database_path('seeders/' . $words[count($words) - 1] . 'Seeder.php'));
                    break;
            }
        }
    }
}
