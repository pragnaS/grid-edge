import csv
import sys
import os
import shutil

#you must have python 3 or above to run this!

directory = "C:\\Users\\Swetha\\grid-edge\\data\\summer\\targets"
#directory = str.replace("\\", "/")
#create new trimmed target directory
new_trimmed = os.path.join(directory, 'trimmed_targets')
print (new_trimmed)
os.makedirs(new_trimmed)

dirs = os.listdir(directory)

for i in dirs:
                print (i)
                if 'aug' in i or 'july' in i or 'june' in i or 'sept' in i:
                        new_path = new_trimmed + '\\' + i
                        print (new_path)
                        try:
                            os.makedirs(new_path)
                        except:
                            print ("already made path")
                        month_csvs = directory + '\\' + i
                        print(month_csvs)
                        for phase_data in os.listdir(month_csvs):
                                print (phase_data)
                                with open(month_csvs + '\\' + phase_data, "r") as f:
                                        lines = f.readlines()
                                        new_csv = new_path + '\\' + phase_data
                                        with open(new_csv, "w+") as f:
                                                for line in lines[8:]:
                                                        f.write(line)
