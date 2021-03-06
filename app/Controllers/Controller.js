/*
 * This file is part of the elegans/janaf package.
 *
 * Copyright (c) 2018, Nitish Kumar <mintu.nitish@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/elegans/janaf
 * 
 * Created By: Nitish Kumar on 2/11/18 4:57 PM
 */

const View = require('@core/view');

class Controller {
    constructor() {}

    test() {
        return new View('welcome');
    }
}

module.exports = Controller;