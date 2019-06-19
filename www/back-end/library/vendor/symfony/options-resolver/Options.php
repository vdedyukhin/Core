<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\OptionsResolver;

use ArrayAccess;
use Countable;

/**
 * Contains resolved option values.
 *
 * @author Bernhard Schussek <bschussek@gmail.com>
 * @author Tobias Schultze <http://tobion.de>
 *
 * @method mixed offsetGet(string $option, bool $triggerDeprecation = true)
 */
interface Options extends ArrayAccess, Countable
{
}
