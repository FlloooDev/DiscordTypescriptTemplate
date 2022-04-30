/*
 * Created on Wed Apr 27 2022 17:48:46 by Florian Reichelt | Fllooo | https://florian-reichelt.de | mail@florian-reichelt.de
 * Last modified on Wed Apr 27 2022 17:48:46 by Florian Reichelt | Fllooo | https://florian-reichelt.de | mail@florian-reichelt.de
 * Copyright: © All rights reserved.
 * Filename: guildMemberAdd.ts
 */
import Bot from '../base/Bot';
import IData from '../utils/IData';

module.exports = class {
    constructor(private client: Bot) {
        this.client = client;
    }

    async run(member) {
        const data: IData = {};

        const client = this.client;

        // Gets guild data
        const guild = await client.findOrCreateGuild(member.guild.id);

        if (guild) member.guild.data = data.guild = guild;

        const memberData = await client.findOrCreateMember(member.id, member.guild.id);
        if (memberData) data.member = member.data = memberData;

        const userData = await client.findOrCreateUser(member.user.id);
        if (userData) data.user = member.user.data = userData;
    }
};