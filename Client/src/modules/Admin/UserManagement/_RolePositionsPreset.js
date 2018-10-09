const D = require('../../_common/dictionary');

let UserPositionPreset = {};
UserPositionPreset[D.UserPosition.Librarian] = [
    D.Role.DairyInput,
    D.Role.DairyInputMovings,
    D.Role.Helpdesk
];
UserPositionPreset[D.UserPosition.Master] = [
    D.Role.DairySummary,
    D.Role.DairySummaryEdit,
    D.Role.Dashboard,
    D.Role.Passport,
    D.Role.Helpdesk,
    D.Role.Meter,
];
UserPositionPreset[D.UserPosition.MasterElder] = [D.Role.Helpdesk, D.Role.Passport, D.Role.Meter, D.Role.Dashboard, D.Role.DairySummary, D.Role.DairySummaryEdit];
UserPositionPreset[D.UserPosition.Moderator] = [
    D.Role.Helpdesk,
    D.Role.Passport,
    D.Role.Meter,
    D.Role.Dashboard,
    D.Role.DairySummary,
    D.Role.DairySummaryEdit,
    D.Role.ModeratorCBS,
];
UserPositionPreset[D.UserPosition.RegionModerator] = [
    D.Role.Helpdesk,
    D.Role.Passport,
    D.Role.Meter,
    D.Role.Dashboard,
    D.Role.DairySummary,
    D.Role.DairySummaryEdit,
    D.Role.ModeratorCBS,
];
UserPositionPreset[D.UserPosition.RegionAdmin] = [
    D.Role.Helpdesk,
    D.Role.Passport,
    D.Role.Meter,
    D.Role.Dashboard,
    D.Role.DairySummary,
    D.Role.DairySummaryEdit,
    D.Role.ModeratorCBS,
    D.Role.AdminCBS,
];
UserPositionPreset[D.UserPosition.Admin] = [
    D.Role.Helpdesk,
    D.Role.Passport,
    D.Role.Meter,
    D.Role.Dashboard,
    D.Role.DairySummary,
    D.Role.DairySummaryEdit,
    D.Role.ModeratorCBS,
    D.Role.AdminCBS,
    D.Role.Admin,
    D.Role.TesterPanel,
];

module.exports = UserPositionPreset;