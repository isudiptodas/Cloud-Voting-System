import 'dotenv/config';

import { initialVoting } from '../data/initialVotingList.js'
import { connectDB } from '../config/connectDB.js'
import { Voting } from '../models/VotingModel.js'

const runInitialData = async () => {
    await connectDB();

    try {
        const data = await Voting.insertMany(initialVoting);
        console.log(`Initial data inserted`);
    } catch (err) {
        console.log(`Error -> `,err);
    }
}

runInitialData();

