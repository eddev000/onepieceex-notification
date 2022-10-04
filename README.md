## INSTALATION

```
git clone https://github.com/eddev000/onepieceex-notification.git && cd onepieceex-notification && npm install

cp onepieceex-notification/one.sh ../usr/bin/one.sh

chmod a+x ../usr/bin/one.sh

onenot.sh

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