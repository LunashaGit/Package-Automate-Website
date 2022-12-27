<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;
class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');

        // if($_SERVER['argv'][1] == 'command:undo' || $_SERVER['argv'][1] == 'undo'){
        //     return;
        // }

        // if($_SERVER['argv'][1] == 'package:discover' || $_SERVER['argv'][1] == 'package:discover'){
        //     return;
        // }

        // Log::channel('artisan')->debug(implode(' ', $_SERVER['argv']));
    }
}
