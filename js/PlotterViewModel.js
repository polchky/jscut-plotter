function PlotterViewModel() {
    "use strict";
    var self = this;
    self.usePlotter = ko.observable(false);
    self.initialWaitSeconds = ko.observable(0);
    self.plungeGCode = ko.observable("");
    self.retractGCode = ko.observable("");

    self.toJson = function () {
        return {
            'usePlotter': self.usePlotter(),
            'initialWaitSeconds': self.initialWaitSeconds(),
            'plungeGCode': self.plungeGCode(),
            'retractGCode': self.retractGCode(),
        };
    }

    self.fromJson = function (json) {
        function f(j, o) {
            if (typeof j !== "undefined") {
                o(j);
            }
        }

        if (json) {
            f(json.usePlotter, self.usePlotter);
            f(json.initialWaitSeconds, self.initialWaitSeconds);
            f(json.plungeGCode, self.plungeGCode);
            f(json.retractGCode, self.retractGCode);
        }
    }
}