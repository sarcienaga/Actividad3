Blockly.JavaScript["f_move"] = function(block) {var number_pasos = block.getFieldValue("pasos");var code="adddatamove("+number_pasos+");";return code;};
Blockly.JavaScript["f_turn_var"] = function(block) {var value = block.getFieldValue("grades");while (value>360){value=value-360;}var dir=block.getFieldValue("DIR");var code = "adddatarot("+dir+","+value+");";return code;};
