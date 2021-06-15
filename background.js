// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var elements = document.getElementsByClassName('annotator-adder');
if (elements.length > 0 ) {
    try {
        for(var e of elements) {
            e.remove();
        }
    } catch (error) {
        console.log("failed to remove annotator", error);
    }       
}    
