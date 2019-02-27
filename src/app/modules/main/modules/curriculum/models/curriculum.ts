import Job from './job';
import Skill from './skill';
import Degree from './degree';
import Network from './network';

export default class Curriculum {
    _id: String;
    firstname: String;
    lastname: String;
    email: String;
    phone: String;
    address: String;
    summary: String;

    degrees: Degree[];
    jobs: Job[];
    skills: Skill[];
    hobbies: String[];
    networks: Network[];
}