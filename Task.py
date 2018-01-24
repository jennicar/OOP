# -*- coding: utf-8 -*-
"""
Created on Fri Jan 19 22:06:17 2018

@author: jenni
"""

class Task:
    def setTask(self, task):
        if not isinstance(task, str):
            raise ValueError("Task should be a string")
        else:
            self._task = task
        
    def getTask(self, task):
        return self._task

    def setTaskStatus(self, status):
        if not isinstance(status, bool):
            raise ValueError("Not a valid status")
        else:
            self._status = status

    def getTaskStatus(self):
        return self._status
