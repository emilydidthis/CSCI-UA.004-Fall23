import urllib.request

try:
    url = "http://002-text-files.glitch.me/world-series.txt"
    response = urllib.request.urlopen(url)
    data = response.read().decode('utf-8')
except:
    print("Couldn't get data.")
else:
    print("Data found.")
    # print(data) # data is a string

# Step 1: Split data string into a master list
# Step 2: Create a list of teams only
# Step 3: Use teams-only list to count ocurrences of teams and put win count in new list
# Step 4: Find the max number in counts-only list, get the index
# Step 5: Use index from Step 4 to plug into teams-only list

# Step 1: split data by new line
master_list = data.split("\n")
print(master_list)

# Step 2: create teams-only
teams = []
for t in master_list:
    if t in teams:
        continue
    else:
        teams.append(t)
print(teams)

# Step 3: create wins list
wins = []
for t in teams:
    w = master_list.count(t)
    wins.append(w)
print(wins)

# Step 4: get max number of wins and its index
index = wins.index(max(wins))
print(index)

# Step 5: use index to get winning team
winning_team = teams[index]
print(winning_team, "won the most with", wins[index], "wins.")


