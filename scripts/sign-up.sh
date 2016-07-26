API="http://tic-tac-toe.wdibos.com"

curl ${API} \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}" \
  --data-urlencode "credentials[password_confirmation]=${PASSWORD}"
  --data-urlencode "credentials[player_name]"=${PLAYERNAME}"


  echo
