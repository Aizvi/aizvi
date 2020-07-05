//#region Types
export type ProcessItem = {
    id: number;
    title: string;
    description: string;
}

//#endregion Types


//#region Item Structure
export const ProcessData: ProcessItem[] = [
    {
        id: 1,
        title: 'Discussion',
        description: 'We meet customers in set place to discuss the details about needs and demands before proposing a plan.',
    },
    {
        id: 2,
        title: 'Concepts & Initiatives',
        description: 'Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.',
    },
    {
        id: 3,
        title: 'Testing & Trying',
        description: 'After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations.',
    },
    {
        id: 4,
        title: 'Execute & install',
        description: 'Once the final plan is approved, everything will be conducted according to the agreed contract.',
    },
];

//#endregion Item Structure
