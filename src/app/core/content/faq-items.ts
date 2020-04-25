import {CvItem} from '../models/cv-item.model';

export class FaqItems {

  public static get FAQ_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'How can I help?',
      description: 'During the initial assessment, I would get to know you better as a whole person, ' +
        'including your personality, your past and current life situation as well as the issues motivated' +
        ' you to make the appointment. A comprehensive psychiatric assessment with screening questions' +
        ' for the most important domains of psycho-pathology provides full understanding of your problems.' +
        ' I am always happy to talk with an important person from your life (family or friend) if you wish.' +
        ' I would advise and refer you for pathology tests or scans if needed. At the end, we will work together' +
        ' on a management including both medication and psychotherapy, depends on your needs. The plan would ' +
        'also include discussion about the frequency of our further sessions. Your GP will get a letter with my' +
        ' opinion and an initial management plan',
    };
  }
  public static get FAQ_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Where am I?',
      description: 'I operate from my private practice: Suite 14 (First floor), 82 Bathurst Street, Liverpool NSW, 2170',
    };
  }
  public static get FAQ_ITEM_3(): CvItem {
    return {
      id: 3,
      headline: 'What would you pay?',
      description: 'If you wish to see me, you should see your GP for a referral and to discuss your treatment options.' +
        ' The cost of the treatment is partially covered by Medicare. Please present my contact details when you see your GP.',
    };
  }
  public static get FAQ_ITEMS(): Array<CvItem> {
    return [this.FAQ_ITEM_1, this.FAQ_ITEM_2, this.FAQ_ITEM_3];
  }

}
