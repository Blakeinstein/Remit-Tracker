import scrapy

# -H 'content-type: application/json' --data-raw '[{"index":"form","product_code":"PC","currency_code":"USD","order_type":"B","city":null}]' 
class BmfSpider(scrapy.Spider):
    name = 'bmf'
    def start_requests(self):
        reqRemit = scrapy.Request(
                'https://www.bookmyforex.com/api/secure/v1/get-products-rates',
                headers={
                    'content-type': 'application/json'
                },
                method='POST',
                dont_filter=True,
                body='[{"index":"form","product_code":"TT","currency_code":"USD","order_type":"R","city":null}, {"index":"form","product_code":"PC","currency_code":"USD","order_type":"B","city":null}]',
                
            )
        return [reqRemit]

    def parse(self, response):
        data = response.json()
        yield {
            'remit': data.get('result')[0].get('rate'),
            'forex': data.get('result')[1].get('rate')
        }
