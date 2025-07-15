import { Injectable } from '@nestjs/common';
import { CreateScraperDto } from './dto/create-scraper.dto';

@Injectable()
export class ScraperService {
  scraper(createScraperDto: CreateScraperDto) {
    // https://alternative.me/crypto/fear-and-greed-index/
    return 'This action adds a new scraper';
  }
}
