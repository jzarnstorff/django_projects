from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=50)
    drink = models.CharField(max_length=50)

    def __str__(self):
        return '{} drink order'.format(self.name)

