export class AboutItems {
  public static get ABOUT_TREE_DATA(): TreeNode[] {
    return [
      {
        name: 'Gender',
        children: [
          {name: 'Male'}
        ]
      },
      {
        name: 'Languages spoken',
        children: [
          {name: 'English'},
          {name: 'Ex-Yugoslavian (Serbian, Bosnian, and Croatian)'},
          {name: 'Italian'},
          {name: 'Some Russian'}
        ]
      },
      {
        name: 'Problem areas treated',
        children: [
          {
            name: 'Anxiety disorders such as panic disorder, agoraphobia, social anxiety disorder, ' +
              'generalized anxiety disorder, performance anxiety and phobias.'
          },
          {name: 'Obsessive compulsive disorders'},
          {name: 'Mood disorders such as depression and bipolar affective disorder'},
          {name: 'Personality disorders'},
          {name: 'Post-traumatic stress disorder, grief and loss issues'},
          {name: 'Schizophrenia and related disorders'},
          {name: 'Sexual disorders'}
        ]
      },
      {
        name: 'Populations treated',
        children: [
          {name: 'Adult'},
          {name: 'Young adult'}
        ]
      },
      {
        name: 'Subspecialty areas',
        children: [
          {name: 'Disaster victims'},
          {name: 'Military personnel and veterans'},
          {name: 'Specialist psychotherapist'},
          {name: 'WorkCover cases'}
        ]
      },
      {
        name: 'Treatments and services offered',
        children: [
          {name: 'Psychiatric assessment'},
          {name: 'Psychiatric management / follow-up'},
          {name: 'Psychopharmacology – general'},
          {name: 'Psychotherapy – cognitive behavioral therapy (CBT)'},
          {name: 'Psychotherapy – psychodynamic'},
          {name: 'Medico-legal reports'},
          {name: 'Second opinion'},
          {name: 'Can take part in case conferences'},
          {name: 'Can accept patients for Item 291 (Opinion and Report)'},
          {name: 'Offers shared care with GPs'},
          {name: 'Offers shared care with psychologists'},
          {name: 'Can take on work injury insurance/compensation cases'}
        ]
      }
    ];
  }
}
