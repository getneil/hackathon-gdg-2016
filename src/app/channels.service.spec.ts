/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChannelsService } from './channels.service';

describe('Service: Channels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelsService]
    });
  });

  it('should ...', inject([ChannelsService], (service: ChannelsService) => {
    expect(service).toBeTruthy();
  }));
});
