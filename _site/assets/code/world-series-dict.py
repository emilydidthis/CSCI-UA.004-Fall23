import urllib.request

try:
    url = "http://002-text-files.glitch.me/world-series.txt"
    response = urllib.request.urlopen(url)
    data = response.read().decode('utf-8')
except:
    print("Couldn't get data.")
else:
    print("Data found.")

# Step 1: Create list from data
# Step 2: Create dictionary
# Step 3: Calculate team (key) with greatest win (value)

# Step 1: Create list from data
master_list = data.split("\n")
print(master_list)

# Step 2: Create dictionary
# teams as keys
# wins as values
stats = {}
for t in master_list:
    stats[t] = master_list.count(t)
print(stats)

# Step 3: Calculate winning team
current_max = 0
for team, win in stats.items():
    if win > current_max:
        winner = team
        current_max = win
print(winner)

# Alternate method:
# stats.keys() -> teams  
# stats.values() -> wins
# ^ both dict objects, iterable, but not 'subscriptable'
# stats.keys()[0]) -> error
teams = list(stats.keys())
wins = list(stats.values())

# Find winning team
winner = teams[wins.index(max(wins))]
#print(winner)






