# -*- coding: utf-8 -*-
"""
Created on Fri Jan 19 22:06:44 2018

@author: jenni
"""

import unittest
from Task import Task

class TestTask(unittest.TestCase):
    def test_initTask(self):
        unit = Task()
        unit.setTaskStatus(False)
        self.assertEqual(unit.getTaskStatus(), False)
		
    def test_setTask(self):
        unit = Task()
        task_name = "Buy groceries"
        expResult = task_name
        unit.setTask(task_name)
        self.assertEqual(unit.getTask(task_name), expResult)
        
    def test_setTaskStatus(self):
        unit = Task()
        unit.setTaskStatus(True)
        self.assertEqual(unit.getTaskStatus(), True)
        unit.setTaskStatus(False)
        self.assertEqual(unit.getTaskStatus(), False)

    def test_setTaskInvalid(self):
        unit = Task()
        ok = False
        task_name = 14234.00
        expResult = task_name
        try:
            unit.setTask(task_name)
        except ValueError:
            ok = True
        self.assertTrue(ok, str(task_name) + " is not a valid input.")

    def test_setTaskStatusInvalid(self):
        unit = Task()
        ok = False
        status = "Unsure"
        expResult = status
        try:
            unit.setTaskStatus(status)
        except ValueError:
            ok = True
        self.assertTrue(ok, str(status) + " is not a valid state.")

if __name__ == '__main__':
    unittest.main()
