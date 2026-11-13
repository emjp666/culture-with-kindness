export type LeadProfile = {
  id: string;
  name: string;
  role: string;
  summary: string;
  biography: string[];
  contribution?: {
    heading: string;
    paragraphs: string[];
  };
};

export const leads: LeadProfile[] = [
  {
    id: 'anna-herrmann',
    name: 'Anna Herrmann',
    role: 'Artistic Director / Joint CEO',
    summary: 'An experienced trauma-informed facilitator and artistic leader with over three decades of experience in theatre and social change.',
    biography: [
      'Anna is an experienced trauma-informed facilitator and artistic leader with over three decades of experience in theatre and social change in the UK and internationally. Her practice combines creative participation, arts education and a commitment to social and racial justice.',
      'She joined Clean Break in 2002 as Head of Education, leading the company’s award-winning theatre and participation work with women in the criminal justice system and women at risk of entering it. She became sole Artistic Director in 2022, bringing extensive experience of hands-on delivery to her organisational leadership.',
      'Alongside her work at Clean Break, Anna is co-author of Making a Leap: Theatre of Empowerment: A Practical Handbook for Creative Drama Work with Young People, a visiting lecturer on Applied Theatre courses and a trained coach. She holds an MA in Arts Education from Royal Central School of Speech and Drama, where she was awarded an Honorary Fellowship in 2022, and a PG Cert with Distinction in Race and Ethnic Relations from Birkbeck University.',
    ],
    contribution: {
      heading: 'What Anna brings to Culture with Kindness',
      paragraphs: [
        'Anna has extensive experience delivering trauma-informed workshops and training across the cultural sector. She draws on years of working alongside women at Clean Break to connect care and participation with the practical responsibilities of making theatre and supporting people.',
        'As a course leader, Anna brings the perspectives of a facilitator and an organisational leader together. Her understanding of the relationships at the heart of creative work, and the organisational support needed to sustain them, gives her training particular relevance for cultural teams and those who lead them.',
      ],
    },
  },
  {
    id: 'jacqueline-stewart',
    name: 'Jacqueline Stewart',
    role: 'Head of Participation',
    summary: 'Two decades at Clean Break, bringing experience in social care, therapeutic community work and trauma-informed creative practice.',
    biography: [
      'Jacqueline has extensive experience across social care and therapeutic community work. She has worked at Clean Break for two decades.',
      'She is a leader in trauma-informed creative practice and a champion of social justice and anti-racism. Jacqueline brings deep expertise in creating supportive creative spaces that centre the agency and participation of women affected by the criminal justice system.',
    ],
  },
  {
    id: 'tracey-anderson',
    name: 'Tracey Anderson',
    role: 'Support Manager',
    summary: 'Her practice draws on theatre for development and using creative work as a tool for communication.',
    biography: [
      'Tracey studied at Rose Bruford College and completed an MA in Theatre for Development, exploring theatre as a tool for communication.',
      'She has trained the Metropolitan Police in race relations and hate crime and has lectured at King Alfred’s College and London Metropolitan University.',
    ],
  }
];
