<?php
/**
 * Copyright (C) MIKO LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nikolay Beketov, 5 2018
 *
 */
namespace MikoPBX\AdminCabinet\Forms;

use Phalcon\Forms\Element\Text;
use Phalcon\Forms\Form;

class LicensingChangeLicenseKeyForm extends Form
{

    public function initialize($entity = null, $options = null)
    {
        $this->add(new Text('licKey', ["value" => $options['licKey']]));
    }
}