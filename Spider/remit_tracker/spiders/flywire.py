import scrapy
import time

class FlywireSpider(scrapy.Spider):
  name = "flywire"
  start_urls = ['https://remittance.flywire.com/api/v1/rates/INR']

  def parse(self, response):
    data = response.json().get('USD')
    yield {
      'name': self.name,
      'timestamp': int(time.time()),
      'data': {        
        'remit': data.get('remittance'),
        'forex': data.get('forexcard'),
      }
    }