import {BioItem} from '../models/bio-item.model';

export class BiographyItem {

  public static get BIOGRAPHY_ITEM(): BioItem {
    return {
      id: 1,
      pictureURI: 'assets/img/ProfilePicture.png',
      bio: 'Welcome to my website.\n' +
        'I am a Consultant Psychiatrist and psychotherapist with more than 22 years of experience.' +
        ' I practice in one of Sydney suburbs –Liverpool. The consulting rooms are in Suite 14, 82 Bathurst Street,' +
        ' Liverpool NSW, 2170'
    };
  }
}
