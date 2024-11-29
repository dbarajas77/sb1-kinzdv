export interface Comment {
  preset: boolean;
  id: string;
  description: string;
  comment: string;
}

export const mockComments: Comment[] = [
  {
    preset: false,
    id: '%IC',
    description: 'Percentage Increase - Independent Consultant',
    comment: "At the client's request, we have increased the percentage of replacement above 100% to allow for the services of an independent consultant, to assist in coordinating the replacement of this asset."
  },
  {
    preset: false,
    id: '%W',
    description: 'Percentage Increase - Waste Factor, Measurement',
    comment: "The measurement indicated represents the actual area to be replaced percentage of replacement has been increased above 100% to allow for a waste factor which should be considered when replacing this component."
  },
  {
    preset: true,
    id: '%S',
    description: 'Percentage Replacement - Shared Component',
    comment: "The percentage replacement for this component has been adjusted to reflect that the client has a 'shared financial responsibility' on this asset. The measurements and/or inventory considered represents the actual installation and the percentage replacement indicates the client's share of the anticipated costs."
  },
  {
    preset: false,
    id: 'A%',
    description: 'Asphalt - Percentage Replacement',
    comment: "It is estimated that a percentage of the asphalt areas will require repair or replacement. The actual condition of the asphalt should be monitored through time and the estimates adjusted accordingly."
  }
];