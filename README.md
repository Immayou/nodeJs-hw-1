# NodeJS-hw-1

<div style="display: flex; align-items: center;">
<image style="margin-right: 50px;" src="./images/javascript.png" alt="javascript logo" width='100' height='130'>
<image src="./images/node-js.png" alt="javascript logo" width='100' height='100'>
</div>

---

## Description

This program allows you to save a list of contacts each of which is **an object of {id, name, phone, e-mail}**.

---

## Options

The following options have been implemented:

### \* get contacts list in table

    node index.js --action list

![Code Usage of list option](https://d3dehtdmp2rwcw.cloudfront.net/ms_546497/FlcRdzEjK9eIhTfZgc0Zocx8mAjm3e/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B2022-12-25%2B00.02.40.png?Expires=1671922800&Signature=a-a-jn8jS3OCSXjLhydMqrns4vcMgvwkrlFqN47CxhR1EcjVykN2tuo4schjQhgQTZTHvFecYnvBVhXMEFsC5Zt-Remyes-nTejXTCcqWkVizvTZ0AWSlFmqVjSM58N8RjEfB31LXvHXgZNRN88nKEwMFxFiHlrNfDFpEy1U1Z2QSTElgrlsM5xdwa2k1~daFGib~FYLwWgEYLbYl25SBGpgEi0r1xUfXCli7NIWcw5AcL2l2zfPLLqKhNg7O0759H0AuhlWssaUUwCTj87YFUvUMO8XMHGuOkVweV~EYCKeBb0O3WF2sfS4IYzz3T4Goz20YGjt708aQJGzeitn9Q__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

### \* get data of the specific contact (**_by id_**)

    node index.js --action get --id 5

![Code Usage of get by id option](https://d3dehtdmp2rwcw.cloudfront.net/ms_546497/BIckAxyVsfGwzFK5RQV6ZWpQaQy50d/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B2022-12-25%2B00.06.35.png?Expires=1671922800&Signature=ZttLIDmN6ovXHtZCEeLPc3kLsO2h3k~jqeY1HCzhWxWqIqVvfNwFiRCmStxY6yecJK3R5T5Ud4ByuWG~kQOR1823wOuFZ6E-Wya17suSrU2xHipADwrmRgeftVFyM6jwLksbxfyvPCx8z8BMOy8X-hmXBDkxiUyLzThcNg5qHkMGkakpiX~aYcvntP6cYn1sDbUQ6mER5qqtU1xu8ZhJyMa7gomQPikIcg8z0~hTniZ3NvX9b3Cyx3wU9eDs-GZwFPj7iOmBPy0Rd4VSnGDz8Z9viXVrvWsyJNEv5TVZOOnHByfEEnupNp7N7CD7gSmUHXaMJX0xqXY9bTrUMUvxxA__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

### \* add contact

    node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

![Code Usage of add option](https://d3dehtdmp2rwcw.cloudfront.net/ms_546497/W3e17d20Nmp9HCs4ZwSBVn3Euf6bY4/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B2022-12-25%2B00.11.32.png?Expires=1671922800&Signature=cC~eURGTYTvohIailnr3uoTbWyX8Rpnxoyb7Dh9rtStX7VRh7G7hdxVH88T2OaWaqwR7YTBWOGu7Fes3I5j2wsfBG5CwQOpcPL3zUBEXiJ0BTc-BCKrijRUsK-Wpz5AE4R5GbbiMUyaZyNnSPoD8xuvBbW3qs1pXTqnhe2UCXHUpPfqjnHkvNSweNSN3-PCWHk1cXd5h9gsVx1U-fv~q-1soLBVndBQmNZ~SHkNoD6CYcmBMSgs91U2wgc09Ebmbo3iQ7D1siw85CqlTK~2bqLuntbQZzofM7h8REF00M~sJKituxNRw9x4Z8FKzQ2GOaF3t1mMmWKPIU5K4xQmkRg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

### \* remove contact

    node index.js --action remove --id=2

![Code Usage of remove option](https://d3dehtdmp2rwcw.cloudfront.net/ms_546497/5wx6HvlyLFZwukvyhONsRtt4GIFjac/%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA%2B2022-12-25%2B00.15.34.png?Expires=1671922800&Signature=hoaTZbqBimSHTkjThs-DLUc5xloHrAhVvJVtIacLurkLfN~99SoSKD~e8hTHUcbkveMwpwu6VpIcj2QOoiCutUPG9VnxSHROwTp1tagxCp~Y5SVrBrNyQQYr9EbECk82vcM2VqC13bgiGX-tutufAqOp1C0XkjWZXNQ195FoQA707hdslT1DYdBa7CHlVuPKbO8YugFFCB~vsyV84mzFOqHAJxQzIpDqHLb1PZ0lp1c0AnGzNlExNYJN0KzBrHDutaBsNbzVzHFJyMaYgQjR6lLG0vKM9yyQd8yZeVmFQW3MikMCJThd~6dIWYdxzfjtMRv3IhsLfRTvnqRf~yeo5Q__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)
