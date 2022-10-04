## INSTALATION

```
git clone https://github.com/eddev000/onepieceex-notification.git && cp onepieex-notification/onepieceex.sh /usr/bin/onepieceex.sh
chmod a+x usr/bin/onepieceex.sh
npm install
```
## CONFIGURE CRONTAB
<p>
    Task Scheduling in Linux.
</p>

```
crontab -e

// Set it with the time of your preference (I don't even know how to use it very well lol)

// EX:

// Sends you notification every 1min (I don't recommend it)

*\1 * * * * termux-notification.sh

// Salve o arquivo

crond start

```