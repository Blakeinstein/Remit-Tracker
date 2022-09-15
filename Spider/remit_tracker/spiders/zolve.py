import scrapy

url = 'https://api.zolve.com/japi/v1/remittance/getWisePublicQuote'

headers = {
    "authority": "api.zolve.com",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "dnt": "1",
    "origin": "https://zolve.com",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
}

body = '{"sourceCurrency":"INR","sourceAmount":"100000.00","targetCurrency":"USD"}'


class ZolveSpider(scrapy.Spider):
    name = 'zolve'
    def start_requests(self):
        request = scrapy.Request(
            url=url,
            method='POST',
            dont_filter=True,
            headers=headers,
            body=body,
        )
        return [request]

    def parse(self, response):
        print(response)
        data = response.json()
        yield {
            'remit': 1 / float(data.get('data').get('rate'))
        }
