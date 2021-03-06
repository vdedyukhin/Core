<?php
/**
 * Copyright © MIKO LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexey Portnov, 2 2020
 */

namespace PhpSchool\TerminalTest\IO;

use PhpSchool\Terminal\IO\BufferedOutput;
use PHPUnit\Framework\TestCase;

/**
 * @author Aydin Hassan <aydin@hotmail.co.uk>
 */
class BufferedOutputTest extends TestCase
{
    public function testFetch() : void
    {
        $output = new BufferedOutput;
        $output->write('one');

        static::assertEquals('one', $output->fetch());
    }

    public function testFetchWithMultipleWrites() : void
    {
        $output = new BufferedOutput;
        $output->write('one');
        $output->write('two');

        static::assertEquals('onetwo', $output->fetch());
    }

    public function testFetchCleansBufferByDefault() : void
    {
        $output = new BufferedOutput;
        $output->write('one');

        static::assertEquals('one', $output->fetch());
        static::assertEquals('', $output->fetch());
    }

    public function testFetchWithoutCleaning() : void
    {
        $output = new BufferedOutput;
        $output->write('one');

        static::assertEquals('one', $output->fetch(false));

        $output->write('two');

        static::assertEquals('onetwo', $output->fetch(false));
    }

    public function testToString() : void
    {
        $output = new BufferedOutput;
        $output->write('one');

        static::assertEquals('one', (string) $output);
    }
}
