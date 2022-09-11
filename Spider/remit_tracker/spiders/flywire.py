import scrapy

class FlywireSpider(scrapy.Spider):
  name = "flywire"
  start_urls = ['https://remittance.flywire.com/api/v1/rates/INR']

  def parse(self, response):
    print(response)
    yield 0