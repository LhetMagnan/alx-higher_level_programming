#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    replaced = []
    for i in range(len(my_list)):
        replaced.append(my_list[i])
    if idx < 0:
        return replaced
    elif idx >= len(my_list):
        return replaced
    else:
        replaced [idx] = element
        return replaced
