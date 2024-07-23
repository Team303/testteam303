// pages/api/bluealliance.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key from The Blue Alliance

const fetchFromTBA = async (endpoint: string) => {
    const response = await fetch(`https://www.thebluealliance.com/api/v3/${endpoint}`, {
        headers: {
            'X-TBA-Auth-Key': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    return response.json();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { endpoint, teamKey, eventKey } = req.query;

    try {
        let data;
        switch (endpoint) {
            case 'team':
                data = await fetchFromTBA(`team/${teamKey}`);
                break;
            case 'event':
                data = await fetchFromTBA(`event/${eventKey}`);
                break;
            case 'matches':
                data = await fetchFromTBA(`team/${teamKey}/matches`);
                break;
            default:
                return res.status(400).json({ error: 'Invalid endpoint' });
        }
        res.status(200).json(data);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}

// import type { NextApiRequest, NextApiResponse } from 'next';

// type TeamInfo = {
//     key: string;
//     team_number: number;
//     nickname: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { teamKey } = req.query;

//     const response = await fetch(`https://www.thebluealliance.com/api/v3/team/frc303/events/${teamKey}/statuses`, {
//         headers: {
//             'X-TBA-Auth-Key': "" + process.env.PUBLIC_KEY
//         }
//     });

//     if (!response.ok) {
//         return res.status(response.status).json({ error: 'Failed to fetch team info' });
//     }

//     const teamInfo: TeamInfo = await response.json();
//     res.status(200).json(teamInfo);
// }
