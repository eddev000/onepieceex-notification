<div align="center">
    <img align="center" width="240px" src="./assets/One-Piece-Logo.png" />
</div>
<div align="left">
    <img align="center" src="./assets/luff.gif" />
</div>

## INSTALATION

```
git clone https://github.com/eddev000/onepieceex-notification.git && cd onepieceex-notification && npm install && cd ..

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

*\1 * * * * one.sh

// Salve o arquivo

crond start

```
## SCREENSHOT

<div align="center">
    <img align="center" width="100%" src="./assets/screen.jpg" />
</div>
