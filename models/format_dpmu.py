import csv
import sys
import os

#you must have python 3 or above to run this!

#directory is a command line argument, path to folder of multi voltage csv's
#directory = sys.argv[1]
directory = 'C:/Users/Swetha/grid-edge/data/target-data/nonscaled_targets'

for phase_data in os.listdir(directory):
    #phase data is multi_voltageA.csv,multi_voltageB.csv etc.
    #print(phase_data)
    with open(directory+ "/" + phase_data, "r") as f:
        lines = f.readlines()

#edited csv's will be put into a folder called "edited_dpmu" within the directory argument
    with open(phase_data, "w+") as f:
        for line in lines[8:]:
                f.write(line)