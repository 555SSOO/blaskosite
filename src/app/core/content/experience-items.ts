export class ExperienceItems {
  public static get EXPERIENCE_TREE_DATA(): TreeNode[] {
    return [
      {
        name: 'PSYCHIATRY TRAINING',
        children: [
          {name: 'Fellowship in Royal Australian and New Zealand College of Psychiatrists'},
          {name: 'Specialist in Psychiatry, training and examination completed at Military Medical Academy, Belgrade, Serbia'},
        ]
      },
      {
        name: 'PSYCHOTHERAPY TRAINING',
        children: [
          {name: 'Certificate in the Psychodynamic Psychotherapy - Advanced training in Psychotherapies, ' +
              'Royal Australian and New Zealand College of Psychiatrists, NSW Branch – Sydney, Australia'},
          {name: 'Certificate in Cognitive-Behavioral Therapy, Serbian Association for Cognitive Behavioral Therapy, Nis, Serbia.'},
          {name: 'Education in Integrative Psychotherapy. Fritz Perls Institut fur Integrative Therapy,' +
              ' Gestalttherapie und Kreativitatsforderung, Dusseldorf, Germany in association with Association ' +
              'for Trauma therapy, Integrative therapy and Psychosocial interventions, Belgrade, Serbia'},
          {name: 'Certificate in Psychodynamic Psychotherapy in Adults. Institute for Mental Health, Belgrade, Serbia'},
        ]
      },
      {
        name: 'MEDICO-LEGAL TRAINING',
        children: [
          {name: 'Work Cover Permanent Impairment Assessors course, Sydney NSW Australia'},
          {name: 'Motor Accidents Authority Trained Assessor course, Sydney NSW Australia'}
        ]
      },
      {
        name: 'MEDICAL DEGREES',
        children: [
          {name: 'Ph.D. Degree, School of Medicine, University of Belgrade, Serbia.'},
          {name: 'Master Degree Biological Psychiatry, School of Medicine, University of Belgrade, Serbia.'},
          {name: 'Nostrification of the Bachelor of Medicine and Bachelor of Surgery Degree, University of Perugia, Italy'},
          {name: 'Medical Doctor Degree, School of Medicine, University of Belgrade, Serbia.'}
        ]
      },
      {
        name: 'POSITIONS HELD AS A CONSULTANT PSYCHIATRIST',
        children: [
          {name: 'Senior Staff Specialist and Deputy Medical Superintendent at Cumberland Hospital - ' +
              'Western Sydney Local Health District, Australia'},
          {name: 'Consultant Psychiatrist at private practices in Serbia and Australia'},
          {name: 'Senior Staff Specialist at few public hospitals in Serbia, Europe'},
          {name: 'Director of The Outpatient Service and Director of The Day Hospital Institute for Mental Health, ' +
              'Belgrade, Serbia, Europe'},
        ]
      },
      {
        name: 'TEACHING',
        children: [
          {name: 'Clinical Senior Lecturer - Sydney Medical School, The University of Sydney'},
          {name: 'Clinical Lecturer - School of Medicine, University of Belgrade'},
          {name: 'Lecturer - School of Philosophy/Sociology, University of Belgrade'},
        ]
      },
      {
        name: 'RESEARCH, PUBLICATIONS, PRESENTATIONS',
        children: [
          {name: 'Main focus of research was on stress and trauma.'},
          {name: 'Participated in research projects and got Master degree and Ph.D. degree.'},
          {name: 'Presented research results at numerous World, European and regional conferences.'},
          {name: 'Author of articles published in peer reviewed Journals, and wrote book chapters.'},
          {name: 'Published a book ‘Kuljic B. Acute Stress Disorder after Psycho-Physical Trauma.’'},
          {name: 'Presented about stress and its psychological/psychiatric consequences in different courses, invited by:',
          children :[
            {name: 'Royal Australian and New Zealand College of Psychiatrists'},
            {name: 'Sydney Medical School The University of Sydney,'},
            {name: 'UNICEF Italy,'},
            {name: '‘Assocition EOS for victims of Trauma and catastrophes ’ Italy,'},
            {name: 'Serbian Association for Cognitive Behavioral Therapy'}
          ]},

        ]
      },
      {
        name: 'MEDICO LEGAL EXPERIENCE',
        children: [
          {name: 'Provided expert opinions for Courts in Australia as a Work Cover Permanent Impairment Assessors, ' +
              'Motor Accidents Authority Trained Assessor NSW Australia'},
          {name: 'Provided expert opinions on psychological trauma for United Nations International Criminal Tribunal ' +
              'for the Former Yugoslavia (The Hague, Netherlands) and The Family Court Belgrade, Serbia.'},
        ]
      }]
  }
}
