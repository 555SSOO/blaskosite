import {Welcome} from '../models/welcome.model';

export class WelcomeItem {

  public static get WELCOME_ITEM(): Welcome {
    return {
      id: 1,
      pictureURI: 'assets/img/ProfilePicture.png',
      title: 'Welcome to my website',
      message: 'I am a Consultant Psychiatrist and psychotherapist with more than 22 years of experience.' +
        ' I practice in one of Sydney suburbs –Liverpool. The consulting rooms are in Suite 14, 82 Bathurst Street,' +
        ' Liverpool NSW, 2170'
    };
  }
}
