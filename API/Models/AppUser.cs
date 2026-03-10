using Microsoft.AspNetCore.Identity;

namespace RecipeApi.Models;

public class AppUser : IdentityUser
{
    public string DisplayName { get; set; } = "";
}