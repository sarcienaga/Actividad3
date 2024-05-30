Blockly.Blocks["f_move"] = {
init: function() {
this.appendDummyInput()
   .appendField("mover")
   .appendField(new Blockly.FieldNumber(0), "pasos");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("Help");
this.setHelpUrl("");
}};
Blockly.Blocks["f_turn_var"] = {init: function() {var DIRECTIONS =[["Derecha","D"],["Izquierda","E"]];
DIRECTIONS[0][0] += " \u21BB";DIRECTIONS[1][0] += " \u21BA";this.setColour(230);this.appendDummyInput()
.appendField("girar").appendField(new Blockly.FieldDropdown(DIRECTIONS), "DIR").appendField(new Blockly.FieldNumber(0), "grades").appendField("\u00B0");
this.setPreviousStatement(true);this.setNextStatement(true);this.setTooltip("Help");}};
