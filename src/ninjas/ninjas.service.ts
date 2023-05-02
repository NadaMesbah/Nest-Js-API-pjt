import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninja 1', weapon: 'stars' },
    { id: 1, name: 'ninja 2', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('ninja not found');
    }
    return ninja;
  }
}
